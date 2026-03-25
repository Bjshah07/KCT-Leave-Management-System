import Leave from "../Models/leave.model.js";

const getMyLeaves = async (req, res) => {
  try {
    const userId = req.user._id;
    const leaves = await Leave.find({ user: userId })
      .populate('user', 'name')
      .sort({ createdAt: -1 })
      .lean();

    const transformedLeaves = leaves.map(leave => {
      const days = Math.ceil((new Date(leave.endDate) - new Date(leave.startDate)) / (1000 * 60 * 60 * 24)) + 1;
      const status = leave.status.charAt(0).toUpperCase() + leave.status.slice(1);
      const dates = `${new Date(leave.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date(leave.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`;

      const steps = [
        { label: 'HR', approved: status === 'Approved' },
        { label: 'Manager', approved: status === 'Approved' },
        { label: 'Director', approved: status === 'Approved' }
      ];

      return {
        type: leave.leaveType,
        dates,
        days,
        steps,
        status
      };
    });

    res.json({ leaves: transformedLeaves });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const userId = req.user._id;

    // Validation
    if (!leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "Start date must be before end date" });
    }

    const leaveData = {
      user: userId,
      leaveType,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      reason,
      ...(req.file && { document: req.file.path })
    };

    const leave = await Leave.create(leaveData);

    res.status(201).json({
      message: "Leave request submitted successfully",
      data: leave
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { createLeave, getMyLeaves };


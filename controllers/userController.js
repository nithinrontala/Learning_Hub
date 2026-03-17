const User = require('../models/User');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    // Only faculty can access this
    const requestingUser = await User.findById(req.userId);
    
    if (!requestingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (requestingUser.role !== 'faculty') {
      return res.status(403).json({ message: 'Only faculty can view students' });
    }

    // Fetch all students
    const students = await User.find({ role: 'student' })
      .select('-password')
      .sort({ createdAt: -1 });

    res.json({
      message: 'Students retrieved successfully',
      students,
      totalStudents: students.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID (for admin/faculty)
exports.getUserById = async (req, res) => {
  try {
    const requestingUser = await User.findById(req.userId);
    const { userId } = req.params;

    if (!requestingUser) {
      return res.status(404).json({ message: 'Requesting user not found' });
    }

    // Only faculty or admin can view other users' details
    if (requestingUser.role !== 'faculty' && userId !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to view this user' });
    }

    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'User retrieved successfully',
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user role (admin only - for demo, we'll allow faculty to promote students to faculty)
exports.updateUserRole = async (req, res) => {
  try {
    const requestingUser = await User.findById(req.userId);
    const { userId } = req.params;
    const { role } = req.body;

    if (!requestingUser) {
      return res.status(404).json({ message: 'Requesting user not found' });
    }

    // For now, we won't allow role changes through API
    // This would require proper admin panel
    return res.status(403).json({ message: 'Role changes not allowed through this endpoint' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

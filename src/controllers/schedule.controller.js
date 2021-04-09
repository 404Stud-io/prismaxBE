const Schedule = require('../models/schedule');

exports.getSchedules = async (req, res) => {
    const schedules = await Schedule.find();
    res.json(schedules)
}

exports.getSchedule = async (req, res) => {
    const schedule = await Schedule.findById(req.params.scheduleId);
    res.status(200).json(schedule)
}

exports.createSchedule = async(req, res) => {
    const { timeInit, timeEnd, presentation, speaker } = req.body
    const newSchedule = new Schedule({ timeInit, timeEnd, presentation, speaker });
    const scheduleSaved = await newSchedule.save()
    res.status(201).json(scheduleSaved)
}

exports.updateSchedule = async (req, res) => {
    const updateSchedule = await Schedule.findByIdAndUpdate(req.params.scheduleId, req.body, {
        new: true
    })
    res.status(200).json(updateSchedule)
}

exports.deleteSchedule = async (req, res) => {
    await Schedule.findByIdAndDelete(req.params.scheduleId)
    res.status(204).json()
}
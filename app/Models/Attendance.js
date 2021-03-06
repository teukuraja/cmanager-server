'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attendance extends Model {
	coursesClassStudents(){
		return this.belongsTo('App/Models/CoursesClassStudents')
	}
}

module.exports = Attendance

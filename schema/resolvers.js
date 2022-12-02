const {DoctorList} = require("./data");
const _ = require("lodash.sortby");

 const resolvers = {
    Query: {
        //Doctor Resolvers
        doctors: () => {
            return DoctorList;
        },
        doctor: (parent, args) => {
            // const id = args.id;
            // const doctor = _.DoctorList.find((i) => i.id = id);
            // return doctor;
            return DoctorList.find((doctor) => doctor.id === args.id)
        },
        doctor_freeslots: (parent, args) => {
            return DoctorList.find((doctor) => doctor.id === args.id)
        },
    },
    Mutation: {
        create_doctor: (parent, args) => {
            const doctor = args.input;
            DoctorList.push(doctor);
            return doctor;
        },
        schedule_appointment: (parent, args) => {
            const newAppointment = args.input;
            let doc;
            DoctorList.forEach((doctor) => {
                if(doctor.id === args.id){
                    doctor.timeslots_booked.push(newAppointment);
                    doc = doctor;
                }
            });
            return doc;
        },
        update_appointment: (parent,args) => {
            const oldname = args.oldName;
            const newname = args.newName;
            let doc;
            DoctorList.forEach((doctor) => {
                    const bookedList = doctor.timeslots_booked;
                    bookedList.forEach((booked) =>
                    {
                        if (booked.patient_name === oldname){
                            doc = doctor;
                            booked.patient_name = newname;
                        }
                    });
            });
            return doc;
        },
        cancel_appointment: (parent, args) => {
            const patient = args.patient_name;
            let doc;
            var count = 0;
            DoctorList.forEach((doctor) => {
                if (doctor.id === args.id) {
                    const bookedList = doctor.timeslots_booked;
                    bookedList.forEach((booked) =>
                    {
                        if (booked.patient_name === patient) {
                            bookedList.splice(count,1);

                            doc = doctor;
                        }
                        count++;
                    });
                    }
            });
            return doc;
        },

    },
};

module.exports = {resolvers};
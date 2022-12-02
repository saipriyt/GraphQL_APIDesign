const { gql } = require("apollo-server");

const typeDefs = gql`
    type Booked {
        timeslot: String
        patient_name: String
    }
    
    type Free {
        timeslot: String
    }
    
    type Doctor{
      id: ID!
      name: String!
      clinic_name: String!
      speciality: String!
      timeslots_available: [Free]
      timeslots_booked: [Booked]
  }

    type Query {
        #Query to get details of all the doctors
        doctors: [Doctor!]!
        #Query to get the doctors details
        doctor(id: ID!): Doctor
        #Query to get the free slots of doctor
        doctor_freeslots(id: ID!): Doctor
    }
    
    input CreateDoctor{
        id: ID!
        name: String!
        clinic_name: String!
        speciality: String!
    }
    
    input ScheduleAppointment{
        timeslot: String
        patient_name: String
    }
    
    input UpdateAppointment{
        oldName: String
        newName: String
    }
   
    type Mutation {
        #Mutation to add a doctor
        create_doctor(input: CreateDoctor): Doctor
        #Mutation to schedule an appointment
        schedule_appointment(id: ID!, input: ScheduleAppointment): Doctor
        #Mutation to update the name of a patient
        update_appointment(oldName: String, newName: String): Doctor
        #Mutation to cancel an appointment
        cancel_appointment(id: ID!, patient_name : String!): Doctor
    }
`;

module.exports = {typeDefs}
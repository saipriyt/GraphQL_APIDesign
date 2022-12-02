const DoctorList = [
    {
        "id": "1",
        "name": "Mathila",
        "clinic_name": "apollo",
        "speciality": "general physician",
        "timeslots_available": [
            {"timeslot" : "9"},
            {"timeslot":"9:30"},
            {"timeslot" : "11"},
            {"timeslot":"11:30"},
            {"timeslot" : "12"},
            {"timeslot":"12:30"},
            {"timeslot" : "13"},
            {"timeslot":"13:30"},
            {"timeslot" : "14"},
            {"timeslot":"14:30"},
            {"timeslot" : "15"},
            {"timeslot":"15:30"},
            {"timeslot" : "16"},
            {"timeslot":"16:30"}
        ],
        "timeslots_booked": [
            {"timeslot" : "10", "patient_name": "priya"},
            {"timeslot" : "10:30", "patient_name": "sai"}
        ]
    },
    {
        "id": "2",
        "name": "Corrie",
        "clinic_name": "UPMC",
        "speciality": "orthopedic",
        "timeslots_available": [
            {"timeslot" : "9"},
            {"timeslot":"9:30"}
        ],
        "timeslots_booked": [
            {"timeslot" : "11", "patient_name": "thupalli"}
        ]
    }
];

module.exports = {DoctorList};
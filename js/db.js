const user = {
    id: 1,
    profile: {
        name: 'Jonathan da Silva Cruz',
        sociaMedia: 'jonathancruzfort@gmail.com',
        avatar: 'img/jonathanCruz.jpeg',
        activitiesLimit: 4,
        created: '4 de junho de 2023 às 22:00:38 UTC-3',
    },
    
    config: {
        principalActivities: true,
        colors: 5,
        backGround: 8,
        font: 3
    },

    activities: [
        // Tempo medido em segundos
        {
            created: '5 de junho de 2023 às 12:10:42 UTC-3',
            description: 'Game development',
            weeklyGoal: 10000,
            config:{
                pomoAlarmIsActive: false,
                ambientSoundIsActive: false,
                activitieWork: 1800,
                activitiePause: 300,
                alarmSound: 2,
                ambientSound: 5
            },
            pomos: [
                { created: '6 de junho de 2023 às 19:15:39 UTC-3', worked: 12612, paused: 720 },
                { created: '7 de junho de 2023 às 12:10:21 UTC-3', worked: 9315, paused: 510 }
            ]
        },
        {
            created: '5 de junho de 2023 às 12:10:42 UTC-3',
            description: 'Programação (Projetos pessoais)',
            weeklyGoal: 18000,
            config:{
                pomoAlarmIsActive: false,
                ambientSoundIsActive: false,
                activitieWork: 1800,
                activitiePause: 300,
                alarmSound: 2,
                ambientSound: 5
            },
            pomos: [
                { created: '6 de junho de 2023 às 19:15:39 UTC-3', worked: 12612, paused: 720 },
                { created: '7 de junho de 2023 às 12:10:21 UTC-3', worked: 9315, paused: 510 }
            ]
        }
    ],

}

const designConfig = {
    alarmSounds: [],
    ambientSounds: [],
    themeColors: [],
    backGroundImages: [],
    fonts: []
}
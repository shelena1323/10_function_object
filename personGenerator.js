const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
        
        firstNameFemaleJson: `{
            "count": 10,
            "list": {     
            "id_1": "Елизавета",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Диана",
            "id_6": "Наталья",
            "id_7": "Марина",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Алиса"
        }
    }`,

    profMaleJson: `{  
        "count": 13,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Плотник",
            "id_3": "Сантехник",
            "id_4": "Грузчик",
            "id_5": "Пожарный",
            "id_6": "Повар",
            "id_7": "Учитель",
            "id_8": "Врач",
            "id_9": "Программист",
            "id_10": "Маркетолог",
            "id_11": "Слесарь",
            "id_12": "Строитель",
            "id_13": "Юрист"          
        }
    }`,
    profFemJson: `{  
        "count": 11,
        "list": {
            "id_1": "Швея",
            "id_2": "Медсестра",
            "id_3": "Стюардесса",
            "id_4": "Повар",
            "id_5": "Учитель",
            "id_6": "Врач",
            "id_7": "Программист",
            "id_8": "Маркетолог",
            "id_9": "Секретарь",
            "id_10": "Бухгалтер",
            "id_11": "Юрист"           
        }
    }`,
    
    monthJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"          
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        const randomGend = Math.round( Math.random());
        return this.gender = ((2*randomGend) != 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.firstNameMaleJson);
    } else {
        return this.randomValue(this.firstNameFemaleJson);
    }
    },


     randomSurname: function() {
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.surnameJson);
    } else {
        let surn = this.randomValue(this.surnameJson);
        return surn + 'a';
    }
    },

    randomSatronymic: function() {
        if (this.person.gender == 'Мужчина'){
        let m = this.randomValue(this.firstNameMaleJson);
        switch (m){
            case "Дмитрий": 
            case "Андрей":
                return m.slice(0,-1) + 'евич'; break;            
            case "Никита": return m.slice(0,-1) + 'ич'; break;
            default:
                return m + 'ович';
        }        
    } else { 
        let m = this.randomValue(this.firstNameMaleJson);
        switch (m){
            case "Дмитрий":
            case "Андрей":
                return m.slice(0,-1) + 'евна'; break;             
            case "Никита": return m.slice(0,-1) + 'ична'; break;
            default:
                return m + 'овна';
        }           
    }
    },

    randomProfession: function() {
        if (this.person.gender == 'Мужчина'){
        return this.randomValue(this.profMaleJson);
    } else {
        return this.randomValue(this.profFemJson);
    }
    },

    randomDate: function() {
        let randomDay = this.randomIntNumber(max = 31, min = 1);
        let randomYear = this.randomIntNumber(max = 2005, min = 1970);
        let randomMonth = this.randomValue(this.monthJson);
        let birthd = `${randomDay}` +' ' + randomMonth + ' ' + `${randomYear}`+'г.';
        switch (randomMonth){
            case "Апреля":
            case "Июня":
            case "Сентября":
            case "Ноября":
                randomDay = this.randomIntNumber(max = 30, min = 1);
                return `${randomDay}` +' ' + randomMonth + ' ' + `${randomYear}`+'г.';
                break;
            case "Февраля":
                this.randomIntNumber(max = 28, min = 1);
                return `${randomDay}` +' ' + randomMonth + ' ' + `${randomYear}`+'г.';
                break;
            default: return birthd;            
        }        
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.satronymic = this.randomSatronymic();
        this.person.profession = this.randomProfession();
        this.person.date = this.randomDate();   
        return this.person;
    }
};


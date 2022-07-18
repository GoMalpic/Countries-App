function validate(e) {
    let error = {}
    const message = 'This field must be filled in';
    const nameVal =  new RegExp(/^([a-zA-Z]|[^0-9]\S)([^0-9]*){1,}$/); // $ marca el final del string
    const durationVal = new RegExp(/^([0-9])(\.[0-5]{2})?$/);

    if (!nameVal.test(e.name)) error.name = message

    if (!e.difficulty) error.difficulty = message

    if (!durationVal.test(e.duration)) error.duration = 'Numbers are only supported'

    if (!e.season) error.season = message;

    if (e.countryId.length === "" || e.countryId.length === 0) error.countryId = 'A country is required'
    
    for (let i = 0; i < e.countryId.length; i++) {
        for (let y = i + 1; y <= e.countryId.length; y++) {
            if (e.countryId[i] === e.countryId[y]) error.countryId = "The countries are repeated"
        }
    }
    return error;
}

export default validate;
function collectFormData() {
    const formData = {};

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const name = input.name;
        const value = input.value;

        if (name) {
            formData[name] = value;
        }
    });

    return formData;
}


const myBtn = document.querySelector("#btnbtn")
myBtn.addEventListener('click', function() {
    const formValues = collectFormData();
    console.log(formValues);    
})
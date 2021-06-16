

const btn = document.querySelector('#btn1')

function click(){
    axios
        .get('https://swapi.dev/api/planets/2/?residents')
        .then((res) => {
            let residents = ['https://swapi.dev/api/planets/2/?residents']
            for (let i = 0; i < residents.length; i++){
                console.log(res.data)
           
                // axios
                // .get()
                // .then()
            }

        })
};

btn.addEventListener('click', click)


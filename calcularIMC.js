(function() {
    const calculoIMC = (peso = 0.0, altura = 0.0) => {
        return (peso / (altura * altura)).toFixed(1);
    }
    console.log(calculoIMC(66.0, 1.79))
})()
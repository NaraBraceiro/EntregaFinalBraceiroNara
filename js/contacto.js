

const formulario = document.querySelector("#formulario").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    // Guardar los datos en el localStorage
    localStorage.setItem("formData", JSON.stringify(data));

    Swal.fire(
        'Su mensaje ha sido enviado. En breve nos contactaremos con usted',
    )

});



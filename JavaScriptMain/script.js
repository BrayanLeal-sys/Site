function verificaAprovacao()
{
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ",nota);

    if (nota >= 7)
    {
        document.getElementById("resultado").innerHTML = "Aluno aprovado!!";
        alert("aluno aprovado");
    }
    else{
        document.getElementById("resultado").innerHTML = "Aluno reprovado";
        alert("aluno reprovado");
    }
}

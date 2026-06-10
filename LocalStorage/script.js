const nameForm = document.getElementById('name-form')
const bemvindoContainer = document.querySelector('div#bemvindo')
const nome = document.getElementById('username')
const sairBtn = document.getElementById('sair')

// Função para checar se o usuário já está logado ao carregar a página
function checkUser() {
    const username = localStorage.getItem('name')

    // Se existir um nome no localStorage, pula o formulário e exibe as boas-vindas
    if (username) {
        nome.textContent = username
        nameForm.style.display = 'none'
        bemvindoContainer.style.display = 'block'
    } else {
        nameForm.style.display = 'block'
        bemvindoContainer.style.display = 'none'
    }
}

// Executa a checagem assim que a página carrega
checkUser()

// Evento de envio do formulário (unificado para salvar e atualizar a tela)
nameForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = document.getElementById('name')

    // Salva o valor no localStorage
    localStorage.setItem('name', nameInput.value)

    // Atualiza o texto com o nome que acabou de ser digitado
    nome.textContent = nameInput.value

    // Limpa o input e troca a exibição das telas
    nameInput.value = ''
    nameForm.style.display = 'none'
    bemvindoContainer.style.display = 'block'
})

// Evento do botão de sair
sairBtn.addEventListener('click', sair)

function sair() {
    localStorage.removeItem('name') // Remove apenas o nome do usuário
    bemvindoContainer.style.display = 'none'
    nameForm.style.display = 'block'
}

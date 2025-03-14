// api/submit.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        // URL do Google Apps Script
        const scriptUrl = "https://script.google.com/macros/s/AKfycbza-WzzYENogOPlfrDTYBibYTAsQME_iGU2cah2JIrdxSYy8NKMwIHYP0_W2hyzy1bn/exec";

        // Faz a requisição POST para o Google Apps Script
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
            redirect: 'follow', // Segue redirecionamentos
        });

        // Retorna a resposta do Google Apps Script
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao processar a requisição' });
    }
}
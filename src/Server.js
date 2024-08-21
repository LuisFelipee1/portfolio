import express from 'express';
import path from 'path';

export class Server {
    constructor(port) {
        this.app = express();

        // Configura o caminho para arquivos estáticos
        this.app.use(express.static(path.join(process.cwd(), 'public')));

        // Configura uma rota para servir o arquivo index.html
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
        });

        this.listen(port);
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Servidor ouvindo na porta ${port}`);
        });
    }
}

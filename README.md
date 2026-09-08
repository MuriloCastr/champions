# Champions IAPE — Central do Leilão

Plataforma responsiva para planejar e administrar o leilão feminino: dashboard do Barcelona, leilão ao vivo, planos A/B/C/D, caixa e elenco dos quatro times, histórico, cadastro de jogadoras e persistência compartilhada via arquivo JSON no servidor.

## Rodar

```bash
npm start
```

Abra `http://localhost:3000`. Para compartilhar entre os técnicos, publique o projeto em um serviço que mantenha Node ativo e use armazenamento persistente para `data/state.json`.

Barcelona começa com R$ 1.000.000. Cada equipe possui 7 vagas: 1 goleira, 5 de linha e 1 reserva.

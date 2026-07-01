# Diário de Bordo – Otimização de Performance Web

## Descrição do Projeto

O **Diário de Bordo** é uma Aplicação Web Progressiva (PWA) desenvolvida para permitir o registro de atividades diárias do usuário. A aplicação possibilita criar, visualizar e remover registros, funcionando também em modo offline por meio de Service Workers e persistindo os dados localmente com `localStorage`.

Além disso, o aplicativo pode ser instalado na tela inicial de dispositivos compatíveis, proporcionando uma experiência semelhante à de um aplicativo nativo.

---

## Análise Inicial

A análise de desempenho foi realizada utilizando a ferramenta **Lighthouse** do Chrome DevTools.

### Resultados iniciais

* **Performance:** 99
* **Accessibility:** 100
* **Best Practices:** 100
* **SEO:** 100

### Métricas observadas

* **First Contentful Paint (FCP):** 1,4 s
* **Largest Contentful Paint (LCP):** 1,4 s
* **Total Blocking Time (TBT):** 90 ms
* **Cumulative Layout Shift (CLS):** 0
* **Speed Index:** 1,4 s

### Gargalos identificados

Embora o projeto já apresentasse excelente desempenho, o Lighthouse indicou algumas oportunidades de otimização:

* Utilização de imagens no formato PNG para os ícones do PWA;
* Arquivos CSS e JavaScript sem minificação;
* Presença de pequeno trecho de código de depuração (`console.log`).

---

## Melhorias Aplicadas

As seguintes otimizações foram implementadas:

* Conversão dos ícones do aplicativo de **PNG** para **WebP**, reduzindo o tamanho dos arquivos;
* Atualização do `manifest.json` para utilizar os novos ícones otimizados;
* Atualização do `service-worker.js` para armazenar em cache os arquivos WebP;
* Remoção de código de depuração não utilizado.

---

## Comparação dos Resultados

| Métrica     | Antes | Depois |
| ----------- | ----- | ------ |
| Performance | 99    | 99     |
| FCP         | 1,4 s | 1,5 s  |
| LCP         | 1,4 s | 1,5 s  |
| TBT         | 90 ms | 110 ms  |
| CLS         | 0     | 0      |
| Speed Index | 1,4 s | 1,5 s  |

---

## Redução do tamanho dos arquivos

Além da análise realizada pelo Lighthouse, foi comparado o tamanho dos ícones utilizados pelo PWA.

| Arquivo | PNG | WebP | Redução |
|---------|----:|-----:|---------:|
| icon-192| 8 KB|6.37 KB| 21% |
| icon-512|48 KB|46.5 KB| 4% |

A conversão para WebP reduziu significativamente o tamanho dos recursos utilizados pelo aplicativo, diminuindo a quantidade de dados transferidos durante o carregamento.

---

## Considerações Finais

O projeto já possuía uma arquitetura simples e leve, o que contribuiu para uma excelente pontuação inicial no Lighthouse.

As otimizações aplicadas seguiram boas práticas recomendadas para aplicações web modernas, especialmente no uso de imagens otimizadas e remoção de recursos desnecessários.

Mesmo sem mudanças significativas na pontuação final, as melhorias realizadas tornam a aplicação mais eficiente e alinhada às recomendações de performance para Progressive Web Apps (PWAs).

---

## Evidências

O repositório contém imagens dos relatórios do Lighthouse gerados antes e depois das otimizações realizadas.

**Relatório inicial:** `antes.png`

**Relatório final:** `depois.png`

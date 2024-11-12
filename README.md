# MP9 - UF2 Act2 (UF2.2) - Optimització i Anàlisi d'Imatges en Diferents Formats

## Objectiu:
En aquesta activitat, exploraràs l'impacte de diferents formats i nivells de compressió en les imatges i aprendràs a avaluar i triar el format òptim per a cada situació.

### Instruccions:
Aquest codi et permet mostrar imatges i visualitzar alguns dels seus detalls de manera dinàmica amb un codi bastant senzill. No cal que entenguis tots els detalls del fitxer Javascript, però fes-hi un cop d’ull per veure’n el funcionament general.

### Tasca 1: Imatges i Formats

- **Busca quatre imatges** que tinguin patrons similars als dels exemples. Descarrega-les per utilitzar-les en aquesta activitat. Cadascuna de les imatges hauria de tenir un format òptim diferent, com ara un logotip, una fotografia de paisatge, 
- Dona'ls un nom significatiu, per exemple, "logotip", "fotografia de paisatge", "imatge amb transparència", etc.
- Per cada imatge, crea una pàgina nova per fer-ne el seguiment. Si afegeixes opcions de navegació entre les pàgines pot fer-ho més fàcil.
- La teva tasca és EXPORTAR les imatges en diferents formats i amb diferents nivells de compressió, i analitzar-ne els resultats. Per a cada imatge, has de fer almenys:
  - Exporta-la en els formats següents: PNG, JPEG i GIF.
  - Per a JPEG, exporta-la amb diferents nivells de compressió: baixa, mitjana i alta.
  - Per a GIF o PNG, utilitza almenys dues profunditats de color diferents: 8 bits i 24 bits.
- Pots fer l’exportació amb GIMP, però **TAMBÉ HAS DE TROBAR UNA ALTRA EINA per fer-ho** i pots fer-la servir per COMPARTIR-LA EN EL SEGÜENT ENLLAÇ: [LLISTA D’EINES](https://docs.google.com/spreadsheets/d/1VfaoH2ySmkSh8da_yhtaUaS7XPwk5Ark34vlQIb7Eww/edit?usp=sharing).

Aquí tens una taula per fer el seguiment dels diferents formats i nivells de compressió a considerar (no cal fer-los tots, però sí almenys els que es mencionen a les instruccions):

| Nom de la Imatge  | Formats        | Nivells de Compressió |       
| ----------------- | -------------- | ---------------------- | 
| logotip.png       | PNG, JPEG, GIF | Baixa, Mitjana, Alta   | 
| fotografia.jpg    | PNG, JPEG, GIF | Baixa, Mitjana, Alta   | 
| paisatge.gif      | PNG, JPEG, GIF | Baixa, Mitjana, Alta   |
| imatge_transp.png | PNG, JPEG, GIF | Baixa, Mitjana, Alta   | 

- Quan acabis, **PUBLICA EL TEU PROJECTE EN LÍNIA** (GitHub Pages, Netlify, Vercel, etc.) i comparteix l’enllaç a l’activitat a l'excel d'entregues de l'assignatura.

### Tasca 2: Anàlisi

Mentre treballes en aquesta activitat, documenta les teves troballes a la mateixa pàgina on penges les imatges. Els punts que HAS D’INCLÒURE són:

- Informació general sobre cadascuna de les imatges: mida, dimensions, etc., visible com a l’exemple proporcionat.
- **Logotip**: Quin format és el més òptim per aquest tipus d’imatge i per què? Es podria reduir encara més la mida? Perdria qualitat?
- **Fotografia i Paisatge**: Quin format és el més òptim per aquest tipus d’imatge i per què? Amb quin nivell de compressió no es perd qualitat visible? Podem reduir la mida encara més sense perdre qualitat? Què passaria si desem la imatge diverses vegades en format JPEG?
- **Imatge amb Transparència**: Quin és el format més òptim per aquest tipus d’imatge i per què? Què passa quan la guardem en format JPEG? Si la nostra web té un fons blanc, quin format seria el més òptim i per què?

### Tasca 3: DeveloperTools - Lighthouse

- Explora la funcionalitat **Lighthouse** de les eines de desenvolupador del navegador. Aquesta eina et permet, entre altres coses, analitzar la càrrega de les imatges. Revisa el rendiment de les diferents pàgines que has creat.
1. Què t’indica Lighthouse sobre el rendiment d’imatges de les teves pàgines? Quins són els principals problemes? Quines recomanacions ofereix?
2. Simula una connexió lenta 3G i analitza la càrrega de les imatges. Què observes?

Afegeix els teus comentaris sobre aquests aspectes a cada pàgina que has creat.

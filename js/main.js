// Accordion Toggle Icon
          function toggleChevron(e) {
              $(e.target)
                  .prev('.panel-heading')
                  .find("i.indicator")
                  .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
          }
          $('#accordion').on('hidden.bs.collapse', toggleChevron);
          $('#accordion').on('shown.bs.collapse', toggleChevron);


// Select Pretensão -->
        $(document).ready(function() {
            $('#pretensao').multiselect({
                nonSelectedText: 'Pretensão'
            });
        });


// Select Tipo
        $(document).ready(function() {
            $('#tipo').multiselect({
                nonSelectedText: 'Tipo'
            });
        });


// Valor
        $(document).ready(function() {
            $('#valor').multiselect({
                nonSelectedText: 'Valor'
            });
        });


// cidade
        $(document).ready(function() {
            $('#cidade').multiselect({
                nonSelectedText: 'Cidade'
            });
        });


// quarto
        $(document).ready(function() {
            $('#quarto').multiselect({
                nonSelectedText: 'Quarto'
            });
        });


// suite
        $(document).ready(function() {
            $('#suite').multiselect({
                nonSelectedText: 'Suite'
            });
        });


// garagem
        $(document).ready(function() {
            $('#garagem').multiselect({
                nonSelectedText: 'Garagem'
            });
        });


// banheiro
        $(document).ready(function() {
            $('#banheiro').multiselect({
                nonSelectedText: 'Banheiro'
            });
        });


// m2
$(document).ready(function() {
    $('#m2').multiselect({
        nonSelectedText: 'm²'
    });
});




// Ajustes do Multiseleção do Bairro
        $(document).ready(function() {
            $('#bairro').multiselect({
                numberDisplayed: 2,
                maxHeight: 250,
                nonSelectedText: 'Bairro',
                enableFiltering: true,
                filterBehavior: 'both',
                enableCaseInsensitiveFiltering: false,
                filterPlaceholder: 'Procure',
                includeSelectAllOption: true,
                selectAllText: 'Todos',
                nSelectedText: 'bairros'
            });
        });

// Ajustes do gallery
blueimp.Gallery(
    document.getElementById('imovel1').getElementsByTagName('a'),
    {
        container: '#container-imovel1',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: true,
        slideshowInterval: 3000
    }
);

blueimp.Gallery(
    document.getElementById('imovel2').getElementsByTagName('a'),
    {
        container: '#container-imovel2',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel3').getElementsByTagName('a'),
    {
        container: '#container-imovel3',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel4').getElementsByTagName('a'),
    {
        container: '#container-imovel4',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel5').getElementsByTagName('a'),
    {
        container: '#container-imovel5',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel6').getElementsByTagName('a'),
    {
        container: '#container-imovel6',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel7').getElementsByTagName('a'),
    {
        container: '#container-imovel7',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel8').getElementsByTagName('a'),
    {
        container: '#container-imovel8',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);
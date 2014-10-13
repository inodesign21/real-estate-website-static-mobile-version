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
    document.getElementById('links').getElementsByTagName('a'),
    {
        container: '#blueimp-gallery-carousel',
        carousel: true
    }
);
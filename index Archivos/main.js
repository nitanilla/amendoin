$(document).ready(function () {
    'use strict';

    istar.graph = istar.setup.setupModel();
    istar.paper = istar.setup.setupDiagram(istar.graph);
    istar.setupMetamodel(dsm3.metamodel);
    ui.setupUi();

    //wait the ui finish loading before loading a model
    $(document).ready(function () {
        setTimeout(function () {
            istar.fileManager.loadModel(istar.models.welcome);
            ui.selectPaper();//clear selection
            }, 5);
    });

    $('#logo a').html('DSM3 - ' + dsm3.metamodel.prefix.toUpperCase());
    document.title = 'DSM3 - ' + dsm3.metamodel.prefix.toUpperCase();
});

/*definition of globals to prevent undue JSHint warnings*/
/*globals istar:false, ui:false, console:false, $:false */
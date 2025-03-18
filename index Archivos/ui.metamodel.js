/* this function defines additional information that can be used in the UI, regarding elements and links of the metamodel
*
*  you can define the following attributes for elements (containers and nodes).
*  If these are not defined, default values based on the node name
*  are adopted.
*    - label (label for its add element button)
*    - tooltip (appears when the add element button is hovered)
*    - statusText (instructions that appear when the add element button is pressed)
*
* */
ui.setupMetamodelUI = function () {
    'use strict';

    var uiMetamodel = {
        nodes: {
            NFR: {
                buttonStatusText: 'Adding <b>NFR softgoal</b>: Click on the diagram to add a NFR softgoal',
            },
            Operationalization: {
                buttonStatusText: 'Adding <b>Operationalization</b>: Click on the diagram to add an Operationalization',
            },
            Claim: {
                buttonStatusText: 'Adding <b>Claim</b>: Click on the diagram to add a Claim',
            }
        },
        nodeLinks: {
            AndRefinementLink: {
                buttonLabel: 'And',
                buttonTooltip: 'Add And-Refinement link',
                buttonStatusText: 'Adding <b>And-Refinement</b> link: click first on the child, and then on the parent',
            },
            OrRefinementLink: {
                buttonLabel: 'Or',
                buttonTooltip: 'Add Or-Refinement link',
                buttonStatusText: 'Adding <b>Or-Refinement</b> link: click first on the child, and then on the parent',
            },
            ContributionLink: {
                buttonLabel: ['Contribution'],
                buttonTooltip: ['Add Contribution link (++, +, some+, some-, -, --, or unknown)'],
                buttonStatusText: [
                    '',
                    'Adding <b>++ Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>+ Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>some+ Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>some- Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>- Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>-- Contribution</b> link: click first on the source and then on the target of the link',
                    'Adding <b>unknown Contribution</b> link: click first on the source and then on the target of the link',
                ],
            },
            CorrelationLink: {
                buttonLabel: ['Correlation'],
                buttonTooltip: ['Add Correlation link (++, +, some+, some-, -, --, or unknown)'],
                buttonStatusText: [
                    '',
                    'Adding <b>++ Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>+ Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>some+ Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>some- Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>- Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>-- Correlation</b> link: click first on the source and then on the target of the link',
                    'Adding <b>unknown Correlation</b> link: click first on the source and then on the target of the link',
                ],
            },
            ArgumentLink: {
                buttonLabel: 'Argument',
                buttonTooltip: 'Add Argument link from a Claim to a link',
                buttonStatusText: 'Adding <b>Argument</b> link: click on the Claim and then on the link it justifies',
            },
        }
    };


    _.defaultsDeep(dsm3.metamodel, uiMetamodel);
}

/*definition of globals to prevent undue JSHint warnings*/
/*globals istar:false, ui:false */
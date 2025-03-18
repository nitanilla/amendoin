/**
 * An object that defines the metamodel to be used.
 * By default, each Cell (Element or Link) is valid. However,
 *  you can define your own isValid functions to constrain the addition of elements in a model.
 *  For examples, see the nodeLink definitions;
 *
 * @typedef metamodel
 * @type {object}
 * @property {string} prefix
 * @property {string} version - written in the format 'a.b'
 * @property {object} containers
 * @property {object} nodes
 * @property {object} containerLinks
 * @property {object} dependencyLinks
 * @property {object} nodeLinks
 *
 * @type {metamodel}
 */
dsm3.metamodel = {
    /** A prefix to use when loading and saving the model */
    /** @type {string} */
    "prefix": "nfr",

    /**
     * Identify the version of the metamodel
     * @example
     * version: '0.1'
     @type {string}
     */
    "version": "1.0",

    /** An object containing the definition of the shapes that are used in this metamodel
     *  You probably don't want to change this */
    /** @type {Object} */
    "shapesObject": joint.shapes.dsm3,

    //Add here the elements of your language that do not behave like actors, i.e., they are not containers;
    //Further constraints can be defined in the constraints file
    /** @type {Object} */
    "nodes": {
        "NFR": { },
        "Operationalization": { },
        "Claim": { }
    },

    //Add here the links of your language that relate a node with another node
    //Constraints for the validity of a Link type can be defined in the constraints file
    /** @type {Object} */
    "nodeLinks": {
        "AndRefinementLink": { },
        "OrRefinementLink": { },
        "ContributionLink": {
            "changeableLabel": true,
            "possibleLabels": ["make", "help", "some+", "some-", "hurt", "break", "unknown"]
        },
        "CorrelationLink": {
            "changeableLabel": true,
            "possibleLabels": ["make", "help", "some+", "some-", "hurt", "break", "unknown"]
        },
        "ArgumentLink": {
            "targetsLink": true
        }
    }
};

/*definition of globals to prevent undue JSHint warnings*/
/*globals istar:false, joint:false, console:false, _:false */
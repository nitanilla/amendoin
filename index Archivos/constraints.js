dsm3.metamodel.nodeLinks.AndRefinementLink.isValid = function (source, target) {
    'use strict';

    var result = {};
    var isValid = true;

    if ( source === target) {
        isValid = false;
        result.message = 'you cannot make an And-Refinement link from an element onto itself';
    }
    if ( isValid && (source.isNFR() && target.isOperationalization())) {
        isValid = false;
        result.message = 'you cannot refine an Operationalization with a NFR';
    }
    if ( isValid && istar.isThereLinkBetween(source, target, 'AndRefinementLink')) {
        isValid = false;
        result.message = 'there can only be one And-Refinement link between the same two elements';
    }
    if ( isValid && (source.isClaim() || target.isClaim())) {
        isValid = false;
        result.message = 'Claims cannot be a part of And-Refinement links';
    }
    if (isValid && (!source.isElement())) {
        isValid = false;
        result.message = 'the source of an And-Refinement link must be an element';
    }
    if (isValid && (!target.isElement())) {
        isValid = false;
        result.message = 'the target of an And-Refinement link must be an element';
    }

    result.isValid = isValid;
    return result;
};

dsm3.metamodel.nodeLinks.OrRefinementLink.isValid = function (source, target) {
    'use strict';

    var result = {};
    var isValid = true;

    if ( source === target) {
        isValid = false;
        result.message = 'you cannot make an Or-Refinement link from an element onto itself';
    }
    if ( isValid && (source.isNFR() && target.isOperationalization())) {
        isValid = false;
        result.message = 'you cannot refine an Operationalization with a NFR';
    }
    if ( isValid && istar.isThereLinkBetween(source, target, 'OrRefinementLink')) {
        isValid = false;
        result.message = 'there can only be one Or-Refinement link between the same two elements';
    }
    if ( isValid && (source.isClaim() || target.isClaim())) {
        isValid = false;
        result.message = 'Claims cannot be a part of Or-Refinement links';
    }
    if (isValid && (!source.isElement())) {
        isValid = false;
        result.message = 'the source of an Or-Refinement link must be an element';
    }
    if (isValid && (!target.isElement())) {
        isValid = false;
        result.message = 'the target of an Or-Refinement link must be an element';
    }

    result.isValid = isValid;
    return result;
};

dsm3.metamodel.nodeLinks.ContributionLink.isValid = function (source, target) {
    'use strict';

    var result = {};
    var isValid = true;

    if ( source === target) {
        isValid = false;
        result.message = 'you cannot make a Contribution link from an element onto itself';
    }
    if ( isValid && (source.isNFR() && target.isOperationalization())) {
        isValid = false;
        result.message = 'you cannot have a NFR contributing to an Operationalization';
    }
    if ( isValid && istar.isThereLinkBetween(source, target, 'ContributionLink')) {
        isValid = false;
        result.message = 'there can only be one Contribution link between the same two elements';
    }
    if ( isValid && (source.isClaim() || target.isClaim())) {
        isValid = false;
        result.message = 'Claims cannot be a part of Contribution links';
    }
    if (isValid && (!source.isElement())) {
        isValid = false;
        result.message = 'the source of a Contribution link must be an element';
    }
    if (isValid && (!target.isElement())) {
        isValid = false;
        result.message = 'the target of a Contribution link must be an element';
    }

    result.isValid = isValid;
    return result;
};

dsm3.metamodel.nodeLinks.CorrelationLink.isValid = function (source, target) {
    'use strict';

    var result = {};
    var isValid = true;

    if ( source === target) {
        isValid = false;
        result.message = 'you cannot make a Correlation link from an element onto itself';
    }
    if ( isValid && (source.isNFR() && target.isOperationalization())) {
        isValid = false;
        result.message = 'you cannot have an Operationalization as the target of a Correlation';
    }
    if ( isValid && (source.isClaim() || target.isClaim())) {
        isValid = false;
        result.message = 'Claims cannot be a part of Correlation links';
    }
    if (isValid && (!source.isElement())) {
        isValid = false;
        result.message = 'the source of a Correlation link must be an element';
    }
    if (isValid && (!target.isElement())) {
        isValid = false;
        result.message = 'the target of a Correlation link must be an element';
    }

    result.isValid = isValid;
    return result;
};

dsm3.metamodel.nodeLinks.ArgumentLink.isValid = function (source, target) {
    'use strict';

    var result = {};
    var isValid = true;

    if ( source === target) {
        isValid = false;
        result.message = 'you cannot make an Argument link from an element onto itself';
    }
    if ( isValid && (! source.isClaim())) {
        isValid = false;
        result.message = 'the source of an Argument link must be a Claim';
    }
    if ( isValid && istar.isThereLinkBetween(source, target, 'ContributionLink')) {
        isValid = false;
        result.message = 'there can only be one Argument link between the same two cells';
    }
    if (isValid && (!target.isLink())) {
        isValid = false;
        result.message = 'the target of a Contribution link must be a link';
    }

    result.isValid = isValid;
    return result;
};

/*definition of globals to prevent undue JSHint warnings*/
/*globals istar:false, joint:false, console:false, _:false */
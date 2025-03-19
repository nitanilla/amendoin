/*
* The Actor, Role, and Agent shapes are structured as follows:
	.element: the circle that represents the actor when collapsed
	text: the text inside the circle, usually representing the name of the actor
	.boundary: the container for the elements that go inside the actor

	Additionally, Agent and Role also contain a path that distinguishes then from the generic Actor element

	A rectangular boundary is used instead of the original circular boundary, to maximize the space available for drawing
*/


joint.shapes.dsm3.NFR = joint.shapes.basic.Path.extend({
    markup: '<g class="scalable"><path class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'NFR',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
                'd': 'M 0 0 a 26.1831 26.1831 0 0 1 25 -3 a 18.8816 18.8816 0 0 1 27 -5 a 15.2684 15.2684 0 0 1 17.4999 3.25 a 19.182 19.182 0 0 1 24 -5 a 11.2361 11.2361 0 0 1 14.5 6.5 a 7.5085 7.5085 0 0 1 7 9 a 6.51159 6.51159 0 0 1 2.5 9.99998 a 7.67717 7.67717 0 0 1 -9 9.5 a 18.0487 18.0487 0 0 1 -17.25 3.625 a 41.1115 41.1115 0 0 1 -50.25 4.25 a 20.8059 20.8059 0 0 1 -22.25 0.25 a 28.5345 28.5345 0 0 1 -19.75 -6 a 12.0307 12.0307 0 0 1 -2.75 -21.75 a 6.06009 6.06009 0 0 1 3.74945 -5.62563 Z', //cloud shape
                'stroke-width': 2,
                'resetOffset': true,
                'vector-effect': 'non-scaling-stroke' /* prevents stroke distortion when the element is resized */
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)
});

joint.shapes.dsm3.Operationalization = joint.shapes.basic.Path.extend({
    markup: '<g class="scalable"><path class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Operationalization',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
                d: 'M ' + 0 + ' ' + 0 + ' a 26.1831 26.1831 0 0 1 25 -3 a 18.8816 18.8816 0 0 1 27 -5 a 15.2684 15.2684 0 0 1 17.4999 3.25 a 19.182 19.182 0 0 1 24 -5 a 11.2361 11.2361 0 0 1 14.5 6.5 a 7.5085 7.5085 0 0 1 7 9 a 6.51159 6.51159 0 0 1 2.5 9.99998 a 7.67717 7.67717 0 0 1 -9 9.5 a 18.0487 18.0487 0 0 1 -17.25 3.625 a 41.1115 41.1115 0 0 1 -50.25 4.25 a 20.8059 20.8059 0 0 1 -22.25 0.25 a 28.5345 28.5345 0 0 1 -19.75 -6 a 12.0307 12.0307 0 0 1 -2.75 -21.75 a 6.06009 6.06009 0 0 1 3.74945 -5.62563 Z', //cloud shape
                fill: 'white)',
                resetOffset: true,
                stroke: 'black',
                'stroke-width': 5,
                'vector-effect': 'non-scaling-stroke' /* prevents stroke distortion when the element is resized */
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                text: 'Quality',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)
});

joint.shapes.dsm3.Claim = joint.shapes.basic.Path.extend({
    markup: '<g class="scalable"><path class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Claim',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
                d: 'M ' + 0 + ' ' + 0 + ' a 26.1831 26.1831 0 0 1 25 -3 a 18.8816 18.8816 0 0 1 27 -5 a 15.2684 15.2684 0 0 1 17.4999 3.25 a 19.182 19.182 0 0 1 24 -5 a 11.2361 11.2361 0 0 1 14.5 6.5 a 7.5085 7.5085 0 0 1 7 9 a 6.51159 6.51159 0 0 1 2.5 9.99998 a 7.67717 7.67717 0 0 1 -9 9.5 a 18.0487 18.0487 0 0 1 -17.25 3.625 a 41.1115 41.1115 0 0 1 -50.25 4.25 a 20.8059 20.8059 0 0 1 -22.25 0.25 a 28.5345 28.5345 0 0 1 -19.75 -6 a 12.0307 12.0307 0 0 1 -2.75 -21.75 a 6.06009 6.06009 0 0 1 3.74945 -5.62563 Z', //cloud shape
                fill: 'white)',
                resetOffset: true,
                stroke: 'black',
                'stroke-dasharray': '10,5',
                'stroke-width': 1,
                'vector-effect': 'non-scaling-stroke' /* prevents stroke distortion when the element is resized */
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                text: 'Quality',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)
});

joint.shapes.dsm3.AndRefinementLink = joint.dia.Link.define('AndRefinementLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                'targetMarker': {
                    'd': 'm 10,-6 l 0,12',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none'
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);

joint.shapes.dsm3.OrRefinementLink = joint.dia.Link.define('OrRefinementLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 12,-6 l -12,6 12,6 z',
                     fill: 'black',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none'
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);

joint.shapes.dsm3.ContributionLink = joint.dia.Link.define('ContributionLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none'
            },
            smooth: true
        },
        labels: [
            {
                position: 0.5,
                attrs: {
                    text: {
                        'font-family': 'sans-serif',
                        'font-size': 10,
                        'font-weight': 'bold'
                    },
                    rect: {
                        fill: 'white',
                        stroke: 'white',
                        'stroke-width': 5
                    }
                }
            }
        ],
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);


joint.shapes.dsm3.CorrelationLink = joint.dia.Link.define('CorrelationLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-dasharray': '10,5',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none'
            },
            smooth: true
        },
        labels: [
            {
                position: 0.5,
                attrs: {
                    text: {
                        'font-family': 'sans-serif',
                        'font-size': 10,
                        'font-weight': 'bold'
                    },
                    rect: {
                        fill: 'white',
                        stroke: 'white',
                        'stroke-width': 5
                    }
                }
            }
        ],
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);


joint.shapes.dsm3.ArgumentLink = joint.dia.Link.define('ArgumentLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none'
            },
            smooth: true
        },
        labels: [
            {
                position: 0.5,
                attrs: {
                    text: {
                        'font-family': 'sans-serif',
                        'font-size': 20,
                        'font-weight': 'bold'
                    },
                    rect: {
                        fill: 'white',
                        stroke: 'white',
                        'stroke-width': 5
                    }
                }
            }
        ],
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);
/*definition of globals to prevent undue JSHint warnings*/
/*globals joint:false */

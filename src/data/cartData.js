const cartData = [
    {
        item:{
            id:1, 
            name:'Twig Node', 
            desc:'A node in a tree with degree sequence',
            link:'twig-node',
            likes:99,
            liked:false,
            price:100,
            images:[
                '/images/3.jpg',
                '/images/1.jpg',
            ],
            tags:[
                'tree','twig','node'
            ],
            canvas:'card',
            mode:'image'
        },
        quantity: 99,
        options:{
            size:99,
            color:'Blue'
        }
    },
    {
        item:{
            id:2, 
            name:'Rooted tree', 
            desc:'A tree with roots',
            link:'rooted-tree',
            likes:99,
            liked:false,
            price:100,
            images:[
                '/images/7.jpg',
                '/images/1.jpg',
                '/images/6.jpg',
                '/images/2.jpg',
                '/images/7.jpg',
                '/images/1.jpg',
                '/images/6.jpg',
                '/images/2.jpg',
            ],
            tags:[
                'tree','root','node'
            ],
            canvas:'card',
            mode:'image'
        },
        quantity: 99,
        options:{
            size:99,
            color:'Blue'
        }
    },
    {
        item:{
            id:3, 
            name:'Caterpillar', 
            desc:'A tree with s spine',
            link:'caterpillar',
            likes:99,
            liked:false,
            price:100,
            images:[
                '/images/6.jpg',
                '/images/2.jpg',
            ],
            tags:[
                'tree','caterpillar','node'
            ],
            canvas:'card',
            mode:'image'
        },
        quantity: 99,
        options:{
            size:99,
            color:'Blue'
        }
    }
]

export default cartData;
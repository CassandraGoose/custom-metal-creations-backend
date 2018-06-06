
exports.seed = function(knex, Promise) {
  return knex.raw('delete from item; alter sequence item_id_seq restart with 90')
    .then(function () {

      const anItem = [
        {
          title: 'Chameleon',
          img_url: 'https://imgur.com/ayqv3LP',
          description: 'Made from bike parts and old tools'
      }, {
        title: 'Butterfly',
        img_url: 'https://imgur.com/BHwoMiG',
        description: 'Metal butterfly with jewels',
      },
      {
        title: 'Coffe Table',
        img_url: 'https://imgur.com/SwYrwze',
        description: 'stainless steel and glass',
      },
      {
        title: 'Cherokee Wall Shield',
        img_url: 'https://imgur.com/tWF4gcZ',
        description: 'Copper tube and silver soldier',
      },
      {
        title: 'Silverware Flower',
        img_url: 'https://imgur.com/l5lORjL',
        description: '',
      },
      {
        title: 'Piggy Bank',
        img_url: 'https://imgur.com/T14hAAS',
        description: '',
      },
      {
        title: 'Shovel Bird',
        img_url: 'https://imgur.com/tOUg9Di',
        description: '',
      },
      {
        title: 'Iron Dino',
        img_url: 'https://imgur.com/INmB0iH',
        description: '',
      },
      {
        title: 'Flower',
        img_url: 'https://imgur.com/Nv0R4ve',
        description: 'Silverware and pump',
      },
      {
        title: 'Piggy Bank',
        img_url: 'https://imgur.com/8AFfGL9',
        description: '',
      },
      {
        title: 'Flower',
        img_url: 'https://imgur.com/m3ZbWKh',
        description: 'Yard art',
      },
      {
        title: 'Flowers',
        img_url: 'https://imgur.com/Hj3NlGn',
        description: 'Silverware and horseshoes',
      },
      {
        title: 'Coat Hanger',
        img_url: 'https://imgur.com/snpzcSe',
        description: 'Rail spikes and horse hardware',
      },
      {
        title: 'Sundial',
        img_url: 'https://imgur.com/c1LmvWj',
        description: 'Made from old jack',
      },
      {
        title: 'Flowers',
        img_url: 'https://imgur.com/6uosVM8',
        description: 'Gears and silverware'
    }, {
      title: 'Plant Stand',
      img_url: 'https://imgur.com/MVPIYdJ',
      description: '',
    },
    {
      title: 'Turtles',
      img_url: 'https://imgur.com/JzxERP9',
      description: 'Made from spoons',
    },
    {
      title: 'Dragonfly',
      img_url: 'https://imgur.com/a2p0wkT',
      description: 'Silverware',
    },
    {
      title: 'Metal Rose Box',
      img_url: 'https://imgur.com/6fCNXXp',
      description: '',
    },
    {
      title: 'Flowers',
      img_url: 'https://imgur.com/Htrze0e',
      description: 'Silverware and gears',
    },
    {
      title: 'Flower',
      img_url: 'https://imgur.com/erjHkzC',
      description: 'spoons and a jewel',
    },
    {
      title: 'Rooster',
      img_url: 'https://imgur.com/l7WDUDu',
      description: 'old tools',
    },
    {
      title: 'Flower and Dragonfly',
      img_url: 'https://imgur.com/Uw5yyKh',
      description: 'flatware',
    },
    {
      title: 'Turtle',
      img_url: 'https://imgur.com/O8ZDKtt',
      description: 'Clutch plate, pipe wrench, railroad spikes',
    },
    {
      title: 'The Band',
      img_url: 'https://imgur.com/FJ20ROB',
      description: 'Silverware',
    },
    {
      title: 'Plant Stand',
      img_url: 'https://imgur.com/MucmRvN',
      description: '',
    },
    {
      title: 'Horseshoe Cross',
      img_url: 'https://imgur.com/ltGkbKt',
      description: '',
    },
    {
      title: 'Painted Rooster',
      img_url: 'https://imgur.com/YmOCMNA',
      description: '',
    },
    {
      title: 'Bird',
      img_url: 'https://imgur.com/ZYnfCZk',
      description: 'old tools and horseshoes'
  }, {
    title: 'Sunflower',
    img_url: 'https://imgur.com/AeQeaOe',
    description: 'Silverware',
  },
  {
    title: 'Bouquet of Flowers',
    img_url: 'https://imgur.com/52S3Sne',
    description: 'Spoons, brass, gears',
  },
  {
    title: 'Roses',
    img_url: 'https://imgur.com/kGlfhu9',
    description: '',
  },
  {
    title: 'Harry Potter Wind Chime',
    img_url: 'https://imgur.com/Ch96mKp',
    description: '',
  },
  {
    title: 'Gear Coat Rack',
    img_url: 'https://imgur.com/rCY8fLW',
    description: '',
  },
  {
    title: 'Sea Turtle',
    img_url: 'https://imgur.com/KVP9aZA',
    description: 'old tools and hub cap',
  },
  {
    title: 'Cross',
    img_url: 'https://imgur.com/N1R19l4',
    description: 'flatware',
  },
  {
    title: 'Key Rack Wall Hanger',
    img_url: 'https://imgur.com/73LcdfX',
    description: 'Horse shoes, railroad spikes, silver spoons',
  },
  {
    title: 'Cross',
    img_url: 'https://imgur.com/teXBduE',
    description: 'old hinges',
  },
  {
    title: 'Key Rack',
    img_url: 'https://imgur.com/2abE97N',
    description: 'Wood and forks',
  },
  {
    title: 'Wall Hanging Rack',
    img_url: 'https://imgur.com/caBPKzi',
    description: 'hardware and silverware',
  },
  {
    title: 'Turtle',
    img_url: 'https://imgur.com/WLUMcJp',
    description: 'Forge blower, steel gears, railroad spikes, channel lock head',
  },
  {
    title: 'Flowers and dragonflies',
    img_url: 'https://imgur.com/jJEnYyf',
    description: 'flatware',
  },
  {
    title: 'Yard Art',
    img_url: 'https://imgur.com/Ob6DZ9S',
    description: 'scrap metal'
}, {
  title: 'Wind Chimes',
  img_url: 'https://imgur.com/QjhHfev',
  description: '',
},
{
  title: 'Toilet Paper Holder',
  img_url: 'https://imgur.com/hvfIOYM',
  description: '',
},
{
  title: 'Dragonfly',
  img_url: 'https://imgur.com/mb0KUhu',
  description: '',
},
{
  title: 'Yard Art Sunflower',
  img_url: 'https://imgur.com/q4jtdSC',
  description: '',
},
{
  title: 'Flowers',
  img_url: 'https://imgur.com/fOHYPBG',
  description: '',
},
{
  title: 'Business Card Holder Bird',
  img_url: 'https://imgur.com/QWJCdnX',
  description: '',
},
{
  title: 'Sherman the Rooster',
  img_url: 'https://imgur.com/uZtqUu9',
  description: '',
},
{
  title: 'Gear Table',
  img_url: 'https://imgur.com/a3et9lt',
  description: '',
},
{
  title: 'Metal Rooster',
  img_url: 'https://imgur.com/rKYQaAv',
  description: '',
},
{
  title: 'Indoor Plant Holder',
  img_url: 'https://imgur.com/k5UYjz9',
  description: '',
},
{
  title: 'Metal Animal Sculpture',
  img_url: 'https://imgur.com/2JF1GO2',
  description: '',
},
{
  title: 'Steel Mandella',
  img_url: 'https://imgur.com/eJpFun8',
  description: '',
},
{
  title: 'Yard Art',
  img_url: 'https://imgur.com/sp0zhKv',
  description: '',
},
{
  title: 'Roses',
  img_url: 'https://imgur.com/fIKvejQ',
  description: 'Copper and Steel'
}, {
title: 'Coat Rack',
img_url: 'https://imgur.com/FRqv8to',
description: 'horse shoes and chain tool',
},
{
title: 'Dragon',
img_url: 'https://imgur.com/uScu5CS',
description: '',
},
{
title: 'Guitarist',
img_url: 'https://imgur.com/FAXq8y6',
description: 'Spoons',
},
{
title: 'Grasshopper',
img_url: 'https://imgur.com/hRk9WOc',
description: 'Old tools',
},
{
title: 'Painted Piggy Bank',
img_url: 'https://imgur.com/uqXU3pa',
description: '',
},
{
title: 'Knife and horse',
img_url: 'https://imgur.com/1ZceTD7',
description: '',
},
{
title: 'Painted Yard Flowers',
img_url: 'https://imgur.com/Y8Z2Vvg',
description: '',
},
{
title: 'Mantis',
img_url: 'https://imgur.com/rxQ2sPF',
description: 'Silverware and hardware',
},
{
title: 'Bird',
img_url: 'https://imgur.com/QZts3tU',
description: 'shovel',
},
{
title: 'Gear Flowers Card Holder',
img_url: 'https://imgur.com/B6Ca4P3',
description: '',
},
{
title: 'Dragonfly',
img_url: 'https://imgur.com/FpCJxhB',
description: 'Silverware',
},
{
title: 'Bird',
img_url: 'https://imgur.com/MWbWD07',
description: 'Fuel Tank',
},
{
title: 'Bird',
img_url: 'https://imgur.com/tlub53v',
description: '',
},
{
title: 'Crosses',
img_url: 'https://imgur.com/RXpT2Ko',
description: 'Silverware',
},
{
title: 'Coat Rack',
img_url: 'https://imgur.com/QFKOO3v',
description: 'Horse shoes and rail spikes',
},
{
title: 'Cross',
img_url: 'https://imgur.com/Y12wVVG',
description: 'Rail Spikes',
},
{
title: 'Bird and Flower',
img_url: 'https://imgur.com/PXyVvAI',
description: '',
},
    ]
      return knex('item').insert(anItem)
    })
};

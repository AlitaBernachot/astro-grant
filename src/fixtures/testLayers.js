// levels = fixed
// n_per_level with spread factor (ex. facor 5 => random range = n/5 ... n*5)
// subtree factor : probability that a node will have subnodes 0 ... 1
function generateTestData(n_levels, n_per_level, spread, subtree_factor) {
  let fulltree = {label: 'root', type: 'group'}
  let total_nodes = fillSubtree(fulltree, 0, 0, n_levels, n_per_level, spread, subtree_factor)
  console.log(total_nodes)
  fulltree.n_items = total_nodes
  return fulltree
}

function fillSubtree(tree, item_offset, current_level, n_levels, n_per_level, spread, subtree_factor) {
  let n_total = 0
  const n_min = n_per_level / spread
  const n_max = n_per_level * spread
  const random_position = Math.random()
  const n_items = Math.floor(n_min + random_position * (n_max - n_min))
  console.log(n_items)
  if (n_items > 0) {
    let child_nodes = [];
    for (let i = 0; i < n_items; i++) {
      let cur_tree = {}
      var subtree_rand = Math.random()
      var has_more_levels = current_level < n_levels
      var shall_have_subtree = subtree_rand < subtree_factor
      // if ((current_level < n_levels) && (Math.random() < subtree_factor)) {
      if (has_more_levels && shall_have_subtree) {
        cur_tree.label = `l${current_level}-g${i}`
        cur_tree.type = 'group'
        n_total += fillSubtree(cur_tree, n_total + item_offset, current_level+1, n_levels, n_per_level, spread, subtree_factor)
      }
      else {
        cur_tree.label = `l${current_level}-i${i}`
        cur_tree.type = 'vector'
        cur_tree.geojson = createVector(current_level, n_total + item_offset)
        n_total += 1;
      }
      child_nodes.push(cur_tree)
    
    }
    tree.children = child_nodes
  }
  return n_total
}


function createVector(level, item) {
  return {
    'type': 'FeatureCollection',
    'crs': {
      'type': 'label',
      'properties': {
        'label': 'EPSG:3857',
      },
    },
    'features': [
      {
        'type': 'Polygon',
        'coordinates': [
          [
            [1e5 + 2e5 * item, -6e5 + 2e5*level],
            [3e5 + 2e5 * item, -6e5 + 2e5*level],
            [2e5 + 2e5 * item, -4e5 + 2e5*level],
            [1e5 + 2e5 * item, -6e5 + 2e5*level],
          ],
        ],
      },
    ],
  }
}
  

// const testLayers = generateTestData(5, 5, 2, .8)
const testLayers = generateTestData(4, 3, 1.5, .5)

const testLayers1 = {
  label: 'root',
  children: [
    {
      label: 'group1',
      type: 'group',
      children: [
        {
        label: 'layer1',
          type: 'vector',
          geojson: {
            'type': 'FeatureCollection',
            'crs': {
              'type': 'label',
              'properties': {
                'label': 'EPSG:3857',
              },
            },
            'features': [
              {
                'type': 'Polygon',
                'coordinates': [
                  [
                    [1e6, -6e6],
                    [3e6, -6e6],
                    [2e6, -4e6],
                    [1e6, -6e6],
                  ],
                ],
              },
            ],
          },
        },
        {
          label: 'layer2',
          type: 'vector',
          geojson: {
            'type': 'FeatureCollection',
            'crs': {
              'type': 'label',
              'properties': {
                'label': 'EPSG:3857',
              },
            },
            'features': [
              {
                'type': 'Polygon',
                'coordinates': [
                  [
                    [4e6, -6e6],
                    [6e6, -6e6],
                    [5e6, -4e6],
                    [4e6, -6e6],
                  ],
                ],
              },
            ],
          },
        },
      ],
    },
    {
      label: 'layer2',
      type: 'vector',
      geojson: {
        'type': 'FeatureCollection',
        'crs': {
          'type': 'label',
          'properties': {
            'label': 'EPSG:3857',
          },
        },
        'features': [
          {
            'type': 'Polygon',
            'coordinates': [
              [
                [4e6, 6e6],
                [6e6, 6e6],
                [5e6, 4e6],
                [4e6, 6e6],
              ],
            ],
          },
        ],
      },
    },
  ],
}

export {testLayers};

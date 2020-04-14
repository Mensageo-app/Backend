const data = [
              { name: 'Alderaan', code: 'ALD', desc: 'Leias born planet' },
              { name: 'Anoat', code: 'ANT', desc: 'Empires planet' },
              { name: 'Bespin', code: 'BSP', desc: 'Landos planet' },
              { name: 'Endor', code: 'NDR', desc: 'Ewoks planet' },
              { name: 'Hoth', code: 'HTH', desc: 'Rebels iced basement planet' },
              { name: 'Polis Massa', code: 'PMS', desc: 'Lukes planet' },
              { name: 'Tatooine', code: 'TTN', desc: 'Anakins planet' }
            ]

exports.seed = knex => knex('test').del().then( () => knex('test').insert( data ))

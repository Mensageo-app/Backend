const filters = require('../../lib/objectFilters')

describe('chopResults', () => {
  
    it('should extract results field', async () => {

      const o = { results: [{ r1: 1}] }

      let r = filters.chopResults(o)

      expect(r.results).toBe(undefined)
      expect(r).toEqual(o.results)
    })

    it('should do nothing if it is not a hash', async () => {

        const o = [{ r1: 1}]

        let r = filters.chopResults(o)
  
        expect(r).toEqual(o)
      })

    it('should do nothing without results key', async () => {

      const o = { dataset: [{ r1: 1}] }
  
      let r = filters.chopResults(o)

      expect(r).toEqual(o)
    })

})
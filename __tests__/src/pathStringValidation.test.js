const {validatePagination} = require('../../src/pathStringValidation')

describe('validatePagination', () => {
  
    it('should keep range params', async () => {

      const p = { rangeStart: 0, rangeEnd: 10 }

      let r = validatePagination(p)

      expect('rangeStart' in r).toBe(true)
      expect(r.rangeStart).toBe(0)
      expect('rangeEnd' in r).toBe(true)
      expect(r.rangeEnd).toBe(10)
    })

    it('should add rangeEnd params', async () => {

        const p = { rangeStart: 0 }
  
        let r = validatePagination(p)
  
        expect('rangeStart' in r).toBe(true)
        expect(r.rangeStart).toBe(0)
        expect('rangeEnd' in r).toBe(true)
        expect(r.rangeEnd).toBe(100)
      })
  
    it('should add rangeStart params', async () => {

      const p = { rangeEnd: 10 }

      let r = validatePagination(p)

      expect('rangeStart' in r).toBe(true)
      expect(r.rangeStart).toBe(0)
      expect('rangeEnd' in r).toBe(true)
      expect(r.rangeEnd).toBe(10)
    })

    it('should add both range params', async () => {
        const p = { }

        let r = validatePagination(p)
        
        expect('rangeStart' in r).toBe(true)
        expect(r.rangeStart).toBe(0)
        expect('rangeEnd' in r).toBe(true)
        expect(r.rangeEnd).toBe(100)
      })
  
})
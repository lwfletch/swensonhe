const expect = require('chai').expect
const request = require('supertest')
const app = require('../server.js')

describe('GET /coffeepods',() => {
    it('returns 200 status', (done) => {
        request(app).get('/coffeepods')
        .end((err,res) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })

    it('returns list of coffee pods', (done) => {
        request(app).get('/coffeepods')
        .end((err,res) => {
            expect(res.body).to.be.a('Array')
            done()
        })
    })
})

describe('GET /coffeepods?flavor=mocha',() => {
    it('returns an array of mocha coffee pods', (done) => {
        request(app).get('/coffeepods?flavor=mocha')
        .end((err,res) => {
            let mochaPods = { 
            _id: '5d8984e37c213e5561351784',
            product_id: 'cp031',
            type: 'small',
            flavor: 'mocha',
            dozen: 1 }
            expect(res.body[0]).to.include(mochaPods)
            done()
        })
    })
})

describe('GET /coffeepods?type=expresso&flavor=vanilla', () => {
    it('returns an array of expresso coffee pods with vanilla flavor', (done) => {
        request(app).get('/coffeepods?type=expresso&flavor=vanilla')
        .end((err,res) => {
            let Pods = {
                _id: '5d89880d7c213e5561351802',
                product_id: 'ep003',
                type: 'expresso',
                flavor: 'vanilla',
                dozen: 3 
            }
            expect(res.body).to.be.a('Array')
            expect(res.body[0]).to.include(Pods)
            done()
        })
    })
})

describe('GET /coffeemachines',() => {
    it('returns 200 status', (done) => {
        request(app).get('/coffeemachines')
        .end((err,res) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })

    it('returns an array of coffee machines', (done) => {
        request(app).get('/coffeemachines')
        .end((err,res) => {
            expect(res.body).to.be.a('Array')
            done()
        })
    })
})

describe('GET /coffeemachines?type=large', () => {
    it('returns an array of large coffee machines', (done) => {
        request(app).get('/coffeemachines?type=large')
        .end((err,res) => {
            let machine = { _id: '5d897f307c213e5561351639',
                product_id: 'cm101',
                type: 'large',
                model: 'base',
                water_line: false 
            }
            expect(res.body).to.be.a('Array')
            expect(res.body[0]).to.include(machine)
            done()
        })
    })
})
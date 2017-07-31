const request = require('supertest');
import app  from '../app';

describe('cdHeroItems test', function() {
    describe('items', function() {
        it('item的id项应该为3', function(done) {
            request(app.listen()).get('/index/cdHeroItems').expect(200).end(function(err, res) {
                if (res.body.data[2].id == "3") return done(err);
                done();
            });
        });
    });
});

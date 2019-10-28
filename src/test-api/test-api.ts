import { assert } from 'chai';
import * as request from "supertest";
const dataTest = require('../data-test/data-test.json');

describe("Confirm Allocation", () => {
    let token;
    it("Test 01 -> Login API Request", async () => {
      const result = await request("https://auth-staging.assignar.com.au").post("/login").send(dataTest.ApiLogin);
      assert.isTrue(result.body.code === 200);
      if(result.body.code === 200){
          token = result.body.data.token;
      }
    });

    it("Test 02 -> Confirm API Request", async () =>{
        let header = {
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        }
        const result = await request("https://command-staging.assignar.com.au").post("/v1/allocations/confirm").send(dataTest.AllocationConfirm).set(header);
        assert.isTrue(result.status === 201);
        const data:any = result.body;
        assert.isTrue(data[0].data.id === dataTest.AllocationConfirm.items[0].id)
    });
  });
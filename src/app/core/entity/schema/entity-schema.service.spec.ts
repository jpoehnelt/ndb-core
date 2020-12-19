/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Entity } from "../entity";
import { async } from "@angular/core/testing";
import { EntitySchemaService } from "./entity-schema.service";
import { DatabaseField } from "../database-field.decorator";

describe("EntitySchemaService", () => {
  let entitySchemaService: EntitySchemaService;

  beforeEach(async(() => {
    entitySchemaService = new EntitySchemaService();
  }));

  it("schema:string converts to strings", function () {
    class TestEntity extends Entity {
      @DatabaseField() aString: string;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      aString: 192,
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    expect(entity.aString).toEqual("192");

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.aString).toEqual("192");
  });

  it("schema:number converts to numbers", function () {
    class TestEntity extends Entity {
      @DatabaseField() aNumber: number;
      @DatabaseField() aFloat: number;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      aNumber: "192",
      aFloat: "1.68",
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    expect(entity.aNumber).toEqual(192);
    expect(entity.aFloat).toEqual(1.68);

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.aNumber).toEqual(192);
    expect(rawData.aFloat).toEqual(1.68);
  });

  it("schema:date converts to Date object", function () {
    class TestEntity extends Entity {
      @DatabaseField() defaultDate: Date = new Date();
      @DatabaseField() otherDate: Date;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      otherDate: "2018-01-01",
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    expect(entity.defaultDate.toDateString()).toEqual(
      new Date().toDateString()
    );

    expect(entity.otherDate.getFullYear()).toEqual(2018);
    expect(entity.otherDate.getMonth()).toEqual(0);
    expect(entity.otherDate.getDate()).toEqual(1);

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.otherDate).toEqual(data.otherDate);
  });

  it("schema:month converts between string and Date objects", function () {
    class TestEntity extends Entity {
      @DatabaseField({ dataType: "month" }) month: Date;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      month: "2018-2",
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    const expectedDate = new Date("2018-02");
    expect(entity.month).toEqual(expectedDate);

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.month).toEqual("2018-02");
  });

  it("schema:date-only converts between YYYY-MM-dd and Date objects", function () {
    class TestEntity extends Entity {
      @DatabaseField({ dataType: "date-only" }) day: Date;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      day: "2018-01-15",
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    const expectedDate = new Date("2018-01-15");
    expect(entity.day).toEqual(expectedDate);

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.day).toBe("2018-01-15");
  });

  it("schema:array converts contained dates to month for saving", function () {
    class TestEntity extends Entity {
      @DatabaseField({ innerDataType: "month" }) dateArr: Date[];
    }
    const id = "test1";
    const entity = new TestEntity(id);
    entity.dateArr = [new Date("2020-01-01"), new Date("2020-12-06")];

    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);

    expect(rawData.dateArr).toEqual(["2020-01", "2020-12"]);
  });

  it("schema:array converts contained month strings to dates when loading", function () {
    class TestEntity extends Entity {
      @DatabaseField({ innerDataType: "month" }) dateArr: Date[];
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      dateArr: ["2020-1", "2020-12"],
    };
    entitySchemaService.loadDataIntoEntity(entity, data);

    expect(entity.dateArr).toEqual([new Date("2020-01"), new Date("2020-12")]);
  });

  it("schema:schema-embed converts contained object with contained schema annotation", function () {
    class Detail {
      @DatabaseField({ dataType: "month" }) month: Date;
      otherStuff: string;
    }
    class TestEntity extends Entity {
      @DatabaseField({ dataType: "schema-embed", ext: Detail }) details: Detail;
    }
    const id = "test1";
    const entity = new TestEntity(id);

    const data = {
      _id: "test2",
      details: { month: "2020-1" },
    };

    entitySchemaService.loadDataIntoEntity(entity, data);
    expect(entity.details.month).toEqual(new Date("2020-01"));

    entity.details.otherStuff = "foo";
    const rawData = entitySchemaService.transformEntityToDatabaseFormat(entity);
    expect(rawData.details.month).toEqual("2020-01");
    expect(rawData.details.otherStuff).toBeUndefined();
  });
});

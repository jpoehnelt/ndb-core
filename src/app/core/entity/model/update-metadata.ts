import { DatabaseField } from "../database-field.decorator";

/**
 * Object to store metadata about a "revision" of a document including date and author of the change.
 */
export class UpdateMetadata {
  /** when the update was saved to db */
  @DatabaseField() at: Date;

  /** username who saved the update */
  @DatabaseField() by: string;

  constructor(by: string, at: Date = new Date()) {
    this.by = by;
    this.at = at;
  }
}

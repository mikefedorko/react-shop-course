import { schema } from 'normalizr';

const MenuSchema = new schema.Entity('menu');

const MenuWithCategoryShema = new schema.Entity('menuItem');

export { MenuSchema, MenuWithCategoryShema };

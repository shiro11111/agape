import { schema } from 'normalizr';

const tags = new schema.Entity('tags', {}, {idAttribute: 'id'});

const dictionary = new schema.Entity('dictionary', {}, {idAttribute: 'id'});

const image = new schema.Entity('image', {}, {idAttribute: 'id'});

const deanery = new schema.Entity('deanery', {dictionary: dictionary}, {idAttribute: 'id'});

const parish = new schema.Entity('parish', {
  image: image,
  deanery: deanery,
  parishType: dictionary,
  province: dictionary,
}, {idAttribute: 'id'});

const community = new schema.Entity('community', {
  image: image,
  parish: parish
}, {idAttribute: 'id'});

export const communityPost = new schema.Entity('communityPost', { community: community}, {idAttribute: 'id'});

export const parishEvent = new schema.Entity('parishEvent', {
  parish: parish,
  tags: tags
}, {idAttribute: 'id'});

export const post = new schema.Entity('post', {parish: parish}, {idAttribute: 'id'});



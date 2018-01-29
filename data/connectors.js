import fetch from 'universal-fetch';
import _ from 'lodash';

const BASE_URL = 'http://dnd5eapi.co/api';


function fetchResponseByPath(path) {
  return fetch(`${BASE_URL}${path}`).then(res => res.json());
};

function fetchResponseByUrl(url) {
  return fetch(url).then(res => res.json());
};

function transformKeyData(data) {
  return _.mapKeys(data, (v, k) => _.camelCase(k))
};

function transformSubclassData(data) {

};

const Class = {
  findAll() {
    return fetchResponseByPath('/classes/').then(json => {
      return json.results
    });
  },
  fetchById(args) {
    const { id } = args
    return fetchResponseByPath(`/classes/${id}`).then(json => transformKeyData(json));
  },
  getSubclasses(index) {
    const id = index;
    return fetchResponseByPath(`/subclasses/${id}`).then(json => [transformKeyData(json)]);
  }
};

const Subclass = {
  getFeatures(features) {
    // @TODO iterate over all features and return data.
    return fetchResponseByUrl(features[0].url).then(res => res.json()).then(json => [transformKeyData(json)]);
  }
};

export { Class, Subclass};
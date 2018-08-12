import React, {Component} from 'react';
import {Form} from 'react-formio';
import qs from 'query-string';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    const customFormHeader = qs.parse(location.search).subdomain;
    const customFormPath = qs.parse(location.search).form;
    const customFormURL = 'https://' + customFormHeader + '.form.io/' + qs.parse(location.search).form;
    console.log(customFormURL);
    const sampleURL = 'https://examples.form.io/example';
    let url = sampleURL;
    if (customFormHeader && customFormPath) {
      url = customFormURL;
    }
    return (
      <div id={customFormPath} style={styles.container}>
        <Form src={url}/>
      </div>
    );
  }
}

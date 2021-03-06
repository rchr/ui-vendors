import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Row, Col, Button, TextField, Select } from '@folio/stripes-components';
import css from '../ContactInfoFormGroup.css';
import { Required } from '../../Utils/Validate';

class EmailAddresses extends Component {
  static propTypes = {
    dropdownCategories: PropTypes.arrayOf(PropTypes.object),
    dropdownLanguages: PropTypes.arrayOf(PropTypes.object),
    fields: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderSubEmailAddresses = this.renderSubEmailAddresses.bind(this);
  }

  renderSubEmailAddresses = (elem, index, fields) => {
    const { dropdownCategories, dropdownLanguages } = this.props;
    return (
      <Row key={index} className={css.panels}>
        <Col xs={12} md={3}>
          <Field label="Email Address*" name={`${elem}.email.value`} id={`${elem}.email.value`} validate={[Required]} component={TextField} fullWidth />
        </Col>
        <Col xs={12} md={3}>
          <Field label="Description" name={`${elem}.email.description`} id={`${elem}.email.description`} component={TextField} fullWidth />
        </Col>
        <Col xs={12} md={3}>
          <Field label="Default Language" name={`${elem}.language`} id={`${elem}.language`} component={Select} fullWidth dataOptions={dropdownLanguages} />
        </Col>
        <Col xs={12} md={3}>
          <Field label="Category" name={`${elem}.categories`} id={`${elem}.categories`} component={Select} fullWidth dataOptions={dropdownCategories} style={{ height: '80px' }} multiple />
        </Col>
        <Col xs={12} md={3} mdOffset={9} style={{ textAlign: 'right' }}>
          <Button onClick={() => fields.remove(index)} buttonStyle="danger">
            Remove
          </Button>
        </Col>
      </Row>
    );
  }

  render() {
    const { fields } = this.props;
    return (
      <Row>
        {fields.length === 0 &&
          <Col xs={6}>
            <div><em>- Please add email -</em></div>
          </Col>
        }
        {fields.length !== 0 &&
          <Col xs={6}>
            <h6>Email Address</h6>
          </Col>
        }
        <Col xs={12}>
          {fields.map(this.renderSubEmailAddresses)}
        </Col>
        <Col xs={12} style={{ paddingTop: '10px' }}>
          <Button onClick={() => fields.push({})}>+ Add Email</Button>
        </Col>
      </Row>
    );
  }
}

export default EmailAddresses;

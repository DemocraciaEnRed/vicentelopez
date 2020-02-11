import React, { Component } from 'react'

export default ({ forum, topic }) => {

  let groupedAttrs = [];

  // Load groups
  forum.topicsAttrs.forEach(topicAttr => {
    let attrGroup = groupedAttrs.find(groupEle => groupEle.name == topicAttr.group)
    if (!attrGroup){
      attrGroup = {
        name: topicAttr.group || '',
        order: topicAttr.groupOrder || 0,
        attrs: [],
        react: []
      }
      attrGroup.name && attrGroup.react.push(<h5 className="col-md-12">{attrGroup.name}</h5>)
      groupedAttrs.push(attrGroup)
    }
    attrGroup.attrs.push(topicAttr)
  })
  console.log(1, groupedAttrs)

  // Sort groups and attrs in groups
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  groupedAttrs.sort(function(gA, gB) {
    return gA.order - gB.order;
  });

  groupedAttrs.forEach(group => {
    group.attrs.sort(function(aA, aB) {
      return aA.order - aB.order;
    });

    // Append react elements
    group.attrs.forEach(attr => {
      const FormInput = forms[attr.kind]
      let val

      if (topic && topic.attrs && topic.attrs.hasOwnProperty(attr.name)) {
        val = topic.attrs[attr.name]
      }
      //console.log(attr, attr.name, val)
      group.react.push(<FormInput key={attr.name} {...attr} value={val} />)
    })
  })

  return (
    <div className='attrs'>
      { groupedAttrs.map(group => group.react) }
    </div>
  )

}

const forms = {}

forms.Number = ({
  name,
  title,
  description,
  mandatory,
  min,
  max,
  value,
  icon,
  width
}) => (
  <div className={`form-group kind-number col-md-${width-6}`}>
    { icon && <img className='title-icon' src={`/lib/admin/admin-topics-form/${icon}`} /> }
    <label id={`anchor-attrs.${name}`}>{title}</label>
    {description && <span className='help-text'>{description}</span>}
    <input
      className='form-control'
      type='number'
      name={`attrs.${name}`}
      defaultValue={value}
      min={min}
      max={max}
      required={mandatory}
      validate={mandatory && 'required'} />
  </div>
)

forms.String = ({
  name,
  title,
  description,
  mandatory,
  min,
  max,
  value,
  icon,
  width
}) => (
  <div className={`form-group kind-string col-md-${width-6}`}>
    { icon && <img className='title-icon' src={`/lib/admin/admin-topics-form/${icon}`} /> }
    <label id={`anchor-attrs.${name}`}>{title}</label>
    {description && <span className='help-text'>{description}</span>}
    <input
      className='form-control'
      type='text'
      name={`attrs.${name}`}
      defaultValue={value}
      minLength={min}
      maxLength={max}
      required={mandatory}
      validate={mandatory && 'required'} />
  </div>
)

forms.LongString = ({
  name,
  title,
  description,
  mandatory,
  min,
  max,
  value,
  icon,
  width
}) => (
  <div className={`form-group kind-string col-md-${width-6}`}>
    { icon && <img className='title-icon' src={`/lib/admin/admin-topics-form/${icon}`} /> }
    <label id={`anchor-attrs.${name}`}>{title}</label>
    {description && <span className='help-text'>{description}</span>}
    <textarea
      className='form-control'
      type='text'
      name={`attrs.${name}`}
      defaultValue={value}
      minLength={min}
      maxLength={max}
      required={mandatory}
      validate={mandatory && 'required'} />
  </div>
)

forms.Enum = ({
  name,
  title,
  description,
  mandatory,
  options,
  value,
  icon,
  width
}) => (
  <div className={`form-group kind-enum col-md-${width-6}`}>
    { icon && <img className='title-icon' src={`/lib/admin/admin-topics-form/${icon}`} /> }
    <label id={`anchor-attrs.${name}`}>{title}</label>
    {description && <span className='help-text'>{description}</span>}
    <select
      className='form-control'
      name={`attrs.${name}`}
      defaultValue={value}
      required={mandatory}
      validate={mandatory && 'required'}>
      {options.map((opt) => (
        <option key={opt.name} value={opt.name}>{opt.title}</option>
      ))}
    </select>
  </div>
)

forms.Boolean = class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.value
    }
  }

  handleChange = (evt) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    const {
      name,
      title,
      description,
      mandatory,
      icon,
      width
    } = this.props

    return (
      <div className='checkbox kind-boolean'>
        <label>
          {!this.state.checked && (
            <input
              type='hidden'
              value='false'
              name={`attrs.${name}`} />
          )}
          <input
            type='checkbox'
            onChange={this.handleChange}
            defaultChecked={this.state.checked}
            defaultValue={this.state.checked ? 'true' : undefined}
            name={this.state.checked ? `attrs.${name}` : undefined}
            required={mandatory}
            validate={mandatory && 'required'} />
          <span className='attrs-title'>{title}</span>
          {description && <span className='help-text'>{description}</span>}
        </label>
      </div>
    )
  }
}

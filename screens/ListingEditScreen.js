import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps'},
  {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email'},
  {label: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'lock'},
  {label: 'Games', value: 4, backgroundColor: 'aquamarine', icon: 'apps'},
  {label: 'Clothing', value: 5, backgroundColor: 'aqua', icon: 'email'},
  {label: 'Sports', value: 6, backgroundColor: 'cornflowerblue', icon: 'lock'},
  {
    label: 'Movies & Music',
    value: 7,
    backgroundColor: 'darkcyan',
    icon: 'apps',
  },
  {label: 'Books', value: 8, backgroundColor: 'darkorchid', icon: 'email'},
  {label: 'Other', value: 9, backgroundColor: 'lightslategray', icon: 'lock'},
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={'50%'}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingEditScreen;

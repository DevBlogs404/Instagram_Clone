import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import userData from '../../assets/data/user.json';
import Colors from '../../themes/colors';
import {Size, Weight} from '../../themes/fonts';
import {useForm, Control, Controller} from 'react-hook-form';
import {IUser} from '../../types/models';
import {useState} from 'react';

type IEditableFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableFields>;

interface ICustomInput {
  label: string;
  multiLine?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableFields;
  rules?: object;
}

const CustomInput = ({
  label,
  multiLine = false,
  control,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? Colors.error : Colors.border},
              ]}
              multiline={multiLine}
            />
            {error && <Text style={{color: Colors.error}}>{error?.type}</Text>}
          </View>
        </View>
      )}
    />
  );
};

const EditProfileScreen = () => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: userData.name,
      username: userData.username,
      bio: userData.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submitted', data);
  };

  const onChangeAvatar = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          console.log(assets);
          setAvatar(assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text onPress={onChangeAvatar} style={styles.textButton}>
        Change Profile Picture
      </Text>
      <CustomInput
        label="Name"
        control={control}
        name="name"
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{required: 'Username is required'}}
      />
      <CustomInput label="Website" control={control} name="website" />
      <CustomInput
        label="Bio"
        multiLine={true}
        control={control}
        name="bio"
        rules={{
          maxLength: {
            value: 560,
            message: 'Your bio should be less then 560 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    // backgroundColor: 'yellow',
    borderRadius: 100,
  },
  textButton: {
    color: Colors.primary,
    fontWeight: Weight.semiBold,
    fontSize: Size.md,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;

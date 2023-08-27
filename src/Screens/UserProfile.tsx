import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {PersonsData} from './Data';
import {
  BackgroundImage,
  CommentImage,
  GalleryImage,
  LikeImage,
  MainMenuImage,
  Menu,
  MoreImage,
  PencilImage,
  ShareImage,
  TickImage,
  UserImage,
} from '../utils/Images';
import {
  AmIQualified,
  Comment,
  CommentHere,
  EditProfile,
  Health,
  HoursAgo,
  Jennifer,
  Like,
  LikesCount,
  LikesThis,
  LongText,
  Name,
  Ocean,
  Reply,
  Share,
  SocialIntegration,
  TimeAgo,
} from '../utils/constants';

function UserProfile() {
  const [selected, setSelected] = useState(1);

  const isSelectedTab = (id: number) => {
    if (id == selected) return true;
    else return false;
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item.id);
        }}
        style={{
          backgroundColor: isSelectedTab(item.id) ? 'skyblue' : '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: responsiveScreenWidth(3),
          height: responsiveHeight(5),
          borderRadius: isSelectedTab(item.id) ? responsiveScreenWidth(2) : 0,
          marginTop: responsiveHeight(1.5),
        }}>
        <Text style={{color: isSelectedTab(item.id) ? 'white' : 'black'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollJi}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.TopBoxJi}>
          <ImageBackground source={BackgroundImage} style={styles.ImageFlex}>
            <View style={styles.TopBox}>
              <View style={styles.RightTopBox}>
                <TouchableOpacity>
                  <Image source={Menu} style={styles.MenuIcon} />
                </TouchableOpacity>
              </View>
              <View></View>
              <View style={styles.LeftTopBox}>
                <TouchableOpacity>
                  <Image source={PencilImage} style={styles.PencilImageStyle} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.AdminImageView}>
            <View style={styles.ImageBoxLower}>
              <Image source={UserImage} style={styles.ImageBoxLowerImage} />
            </View>
          </View>
          <View style={styles.AdminLeftImage}>
            <Image source={PencilImage} style={styles.PencilImageStyle} />
          </View>
        </View>
        <View>
          <View style={styles.NameBox}>
            <Text style={styles.JessicaAdvanture}>{Name}</Text>
            <TouchableOpacity style={styles.EditButtonContainer}>
              <Text style={styles.EditButtonText}>{EditProfile}</Text>
              <Image source={PencilImage} style={styles.EditBox} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={PersonsData}
              horizontal
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={styles.FlatListStyle}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {selected == 5 && (
            <View style={styles.PaddingWala}>
              <View style={styles.BottomBox}>
                <View style={styles.BottomTopBox}>
                  <Image source={UserImage} style={styles.BottomImage} />
                  <Text style={styles.JessicaLike}>{LikesThis}</Text>
                </View>
                <View style={styles.LineBox}>
                  <View style={styles.Line} />
                </View>
                <View style={styles.BoootmBox}>
                  <View style={{flex: 1.1}}>
                    <Image source={UserImage} style={styles.JessicaImage} />
                  </View>
                  <View style={{flex: 3}}>
                    <View style={styles.MiddleJi}>
                      <View>
                        <Text style={styles.FontStyles}>{Ocean}</Text>
                      </View>
                      <View style={styles.HourDistance}>
                        <Text style={styles.FontStyles2}>{HoursAgo}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.FontStyles2}>{LongText}</Text>
                    </View>
                    <View style={styles.ButtonIntegrationJi}>
                      <TouchableOpacity style={styles.ButtonIntegration}>
                        <Text style={styles.ButtonIntegrationColor}>
                          {SocialIntegration}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ButtonIntegration2}>
                        <Text style={styles.ButtonIntegrationColor}>
                          {Health}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flex: 0.3}}>
                    <TouchableOpacity>
                      <Image source={MoreImage} style={styles.MoreImageStyle} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={styles.LikesBOx}>
                    <Text style={styles.OneMoreText}>{LikesCount}</Text>
                  </View>
                  <View style={styles.LikeBox}>
                    <View style={styles.LikeMeLike}>
                      <Image
                        source={LikeImage}
                        style={styles.LikeMeLikeImage}
                      />
                      <TouchableOpacity>
                        <Text style={styles.LikeMeLikeText}>{Like}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.LikeMeLike}>
                      <Image
                        source={CommentImage}
                        style={styles.LikeMeLikeImage}
                      />
                      <TouchableOpacity>
                        <Text style={styles.LikeMeLikeText}>{Comment}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.LikeMeLike}>
                      <Image
                        source={ShareImage}
                        style={styles.LikeMeLikeImage}
                      />
                      <TouchableOpacity>
                        <Text style={styles.LikeMeLikeText}>{Share}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.LineBox}>
                  <View style={styles.Line} />
                </View>
                <View>
                  <View style={styles.CommentBox}>
                    <View>
                      <Image source={UserImage} style={styles.JessicaImage} />
                    </View>
                    <View style={styles.CommentBoxTopSecond}>
                      <View>
                        <Text style={styles.CommentBoxPicture}>
                          {Jennifer}{' '}
                          <Text style={styles.CommentBoxText}>{TimeAgo}</Text>
                        </Text>
                      </View>
                      <View style={styles.CharacterSpaccing}>
                        <Text style={styles.CommentBoxText}>
                          {AmIQualified}
                        </Text>
                      </View>
                      <View style={styles.CharacterSpaccing}>
                        <Text style={styles.CommentBoxText}>{Reply}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.condemm}>
                    <View style={styles.inputcondemm}>
                      <TextInput
                        style={styles.condemmtextInput}
                        placeholder={CommentHere}
                      />
                      <TouchableOpacity style={styles.condemmimageButton}>
                        <Image
                          source={GalleryImage}
                          style={styles.condemmimageIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          {selected == 1 && (
            <View style={styles.DownFlatList}>
              <View style={styles.DownFlatJi}>
                <View>
                  <Text style={styles.BoxesTextJi}>Full Name</Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>Jessica Adams</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>Lives in</Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>
                    New York, Southern State , U.S.
                  </Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>Preferred Language</Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>English</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>Gender</Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>Female</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>Email Address</Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>jessicaadams@gmail.com</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>Intrests</Text>
                </View>
                <View>
                  <View style={styles.row}>
                    <View style={styles.Boxes}>
                      <Image source={TickImage} style={styles.Tick} />
                      <Text style={styles.BoxesText}>Football</Text>
                    </View>
                    <View style={styles.Boxes2}>
                      <Image source={TickImage} style={styles.Tick} />
                      <Text style={styles.BoxesText}>Others</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.Boxes}>
                      <Image source={TickImage} style={styles.Tick} />
                      <Text style={styles.BoxesText}>Teaching Ideas</Text>
                    </View>
                    <View style={styles.Boxes2}>
                      <Image source={TickImage} style={styles.Tick} />
                      <Text style={styles.BoxesText}>Gardening</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>
                    What kind of parternship {'\n'} practitioner am i ?
                  </Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>University Lecturer</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>
                    Accredited partnership {'\n'} broker
                  </Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>yes</Text>
                </View>
              </View>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
              </View>
              <View style={styles.DownFlatJi2}>
                <View>
                  <Text style={styles.BoxesTextJi}>
                    Organizational {'\n'} Affliations
                  </Text>
                </View>
                <View>
                  <Text style={styles.BoxesTextJi}>
                    Afflicated to ecosystem {'\n'} environment
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FE',
  },
  ScrollJi: {
    flexGrow: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  ImageFlex: {
    height: responsiveHeight(27.5),
  },
  TopBox: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: responsiveScreenWidth(3),
  },
  RightTopBox: {
    marginRight: responsiveScreenWidth(3),
    padding: responsiveScreenWidth(2),
  },
  MenuIcon: {
    height: responsiveHeight(2),
    width: responsiveScreenWidth(4.5),
  },
  LeftTopBox: {
    marginRight: responsiveScreenWidth(3),
    padding: responsiveScreenWidth(2),
    backgroundColor: 'white',
    borderRadius: responsiveScreenWidth(5),
  },
  PencilImageStyle: {
    width: responsiveScreenWidth(4),
    height: responsiveHeight(2),
  },
  AdminImageView: {
    position: 'absolute',
    marginTop: responsiveHeight(20),
    marginLeft: responsiveScreenWidth(35),
  },
  ImageBoxLower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageBoxLowerImage: {
    width: responsiveScreenWidth(30),
    height: responsiveHeight(15),
    borderWidth: responsiveScreenWidth(1),
    borderColor: 'white',
    borderRadius: responsiveScreenWidth(15),
  },
  AdminLeftImage: {
    padding: responsiveScreenWidth(2),
    backgroundColor: 'white',
    borderRadius: responsiveScreenWidth(5),
    marginTop: responsiveHeight(29),
    position: 'absolute',
    marginLeft: responsiveScreenWidth(58),
  },
  NameBox: {
    alignItems: 'center',
    marginTop: responsiveHeight(8),
  },
  JessicaAdvanture: {
    fontSize: responsiveFontSize(3.3),
    fontWeight: 'bold',
  },
  EditButtonContainer: {
    backgroundColor: '',
    flexDirection: 'row',
  },
  EditButtonText: {
    color: 'gray',
  },
  EditBox: {
    height: responsiveHeight(2),
    width: responsiveScreenWidth(5),
    marginLeft: responsiveScreenWidth(2),
  },
  FlatListStyle: {
    marginLeft: responsiveScreenWidth(7),
    marginRight: responsiveScreenWidth(7),
  },
  PaddingWala: {
    paddingVertical: responsiveScreenWidth(7),
    paddingHorizontal: responsiveScreenWidth(6),
  },
  BottomBox: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: responsiveScreenWidth(3),
    borderRadius: responsiveScreenWidth(3),
  },
  BottomImage: {
    width: responsiveScreenWidth(12.5),
    height: responsiveHeight(6),
    marginRight: responsiveScreenWidth(2),
  },
  BottomTopBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  JessicaLike: {
    fontSize: responsiveFontSize(2),
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  LineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  Line: {
    flex: 1,
    height: responsiveHeight(0.2),
    backgroundColor: '#E0E0E0',
    marginTop: responsiveHeight(2),
  },
  JessicaImage: {
    width: responsiveScreenWidth(16),
    height: responsiveHeight(7.5),
  },
  BoootmBox: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  MiddleJi: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  HourDistance: {
    marginLeft: responsiveScreenWidth(15),
  },
  FontStyles: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: '#A9A9A9',
  },
  FontStyles2: {
    fontSize: responsiveFontSize(1.5),
    color: '#A9A9A9',
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  ButtonIntegration: {
    backgroundColor: 'skyblue',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveHeight(0.3),
    borderRadius: responsiveScreenWidth(5),
  },
  ButtonIntegrationColor: {
    color: 'white',
    fontSize: responsiveFontSize(1.4),
  },
  ButtonIntegration2: {
    backgroundColor: 'skyblue',
    paddingHorizontal: responsiveScreenWidth(3),
    borderRadius: responsiveScreenWidth(5),
    marginLeft: responsiveScreenWidth(2),
    paddingVertical: responsiveHeight(0.3),
  },
  LikeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  LikeMeLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LikeMeLikeImage: {
    width: responsiveScreenWidth(4),
    height: responsiveHeight(2),
  },
  LikeMeLikeText: {
    marginLeft: responsiveScreenWidth(2),
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  OneMoreText: {
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  DownFlatList: {
    marginTop: responsiveHeight(3),
    backgroundColor: 'white',
    padding: responsiveScreenWidth(5),
  },
  DownFlatJi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DownFlatJi2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(3),
  },
  BoxesTextJi: {
    fontSize: responsiveHeight(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: responsiveHeight(1),
  },
  Tick: {
    height: responsiveHeight(2),
  },
  BoxesText: {
    fontSize: responsiveHeight(1.7),
    color: 'white',
    marginLeft: responsiveScreenWidth(1.7),
    marginRight: responsiveScreenWidth(1),
  },
  Boxes: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    padding: responsiveScreenWidth(1.2),
    borderRadius: responsiveScreenWidth(5),
  },
  Boxes2: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveScreenWidth(5),
    marginLeft: responsiveScreenWidth(2),
  },
  LikesBOx: {
    marginTop: responsiveHeight(2),
  },
  CommentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: responsiveHeight(2),
  },
  CommentBoxTopSecond: {
    marginLeft: responsiveScreenWidth(5),
  },
  CommentBoxPicture: {
    fontSize: responsiveFontSize(2.3),
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  CommentBoxText: {
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6),
  },

  condemm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(0.5),
  },
  inputcondemm: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#F0F9FE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: responsiveScreenWidth(3),
    color: '#A9A9A9',
  },
  condemmtextInput: {
    flex: 1,
    paddingVertical: responsiveScreenWidth(2),
  },
  condemmimageButton: {
    padding: 5,
  },
  condemmimageIcon: {
    width: responsiveScreenWidth(5.1),
    height: responsiveHeight(2.5),
    tintColor: '#A9A9A9',
  },
  TopBoxJi: {
    borderBottomLeftRadius: responsiveScreenWidth(3),
    borderBottomRightRadius: responsiveScreenWidth(3),
  },
  ButtonIntegrationJi: {
    flexDirection: 'row',
  },
  MoreImageStyle: {
    tintColor: 'gray',
    width: responsiveScreenWidth(5),
    height: responsiveHeight(2),
  },
  CharacterSpaccing: {
    marginTop: responsiveHeight(0.3),
  },
});

export default UserProfile;

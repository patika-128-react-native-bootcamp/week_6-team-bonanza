import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 360,
    height: 225,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: 150,
    height: 225,
    borderRadius: 16,
  },
  cardDetail: {
    flexDirection: 'column',
  },
  cardDetailHeader: {
    fontSize: 15,
    //fontFamily: 'Gilroy-Heavy',
    fontWeight: '900',
    color: 'black',
    left: 15,
    width: 190,
  },
  cardDetailExplanation: {
    fontSize: 10,
    textAlign: 'left',
    //fontFamily: 'Gilroy-Regular',
    left: 15,
    paddingBottom: 15,
    width: 180,
    paddingTop: 4,
  },
  cift: {
    flexDirection: 'row',
  },
  likeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: '#ec1d23',
  },
  unLikeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: '#748c94',
  },
});

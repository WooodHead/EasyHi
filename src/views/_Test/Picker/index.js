import HiPicker from 'components/HiPicker'
import MintPicker from 'components/MintPicker'

export default require('./index.pug')({
  data() {
    return {
      pickers: [
        {
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07'],
          className: ['slot1', 'slot4', {slot5: true}],
          textAlign: 'right'
        }, {
          divider: '-',
          className: 'slot2'
        }, {
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    itemChanged(index, key, value) {
      console.log(index, key, value)
    }
  },
  components: {
    HiPicker,
    MintPicker
  }
})

from flask import abort
from flask import Flask
from flask import render_template

app = Flask(__name__, static_url_path='', static_folder='static')

files = [
    '1_vue_computed_watch',
    '2_class_style_binding',
    '3_condition_rendering',
    '4_list_rendering',
    '5_event_handling',
    '6_form_binding',
    '7_component',
    '8_transitions',
]


@app.route('/', methods=['GET'])
def view_dashboard():
    try:
        links = []
        for f in files:
            links.append({'href': '%s.html' % f, 'text': f})
        return render_template('index.html', links=links)
    except Exception, e:
        print 'Exception,', str(e)
        abort(500)


if __name__ == '__main__':
    app.run(debug=True)

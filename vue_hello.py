from flask import abort
from flask import Flask
from flask import render_template

import os

app = Flask(__name__, static_url_path='', static_folder='static')


def sort_files(x, y):
    xx = x.split('_')[0]
    yy = y.split('_')[0]
    return int(xx) - int(yy)


@app.route('/', methods=['GET'])
def view_dashboard():
    try:
        links = []
        file_names = []
        file_list = os.listdir(os.path.dirname(os.path.abspath(__file__)) + '/static')
        for ff in file_list:
            if len(ff) > 4 and ff[-4:] == 'html':
                file_names.append(ff)
        file_names = sorted(file_names, cmp=sort_files)
        for f in file_names:
            links.append({'href': '%s.html' % f, 'text': f})
        return render_template('index.html', links=links)
    except Exception, e:
        print 'Exception,', str(e)
        abort(500)


if __name__ == '__main__':
    app.run(debug=True)
